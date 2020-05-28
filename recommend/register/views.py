from django.shortcuts import render,redirect
from django import forms
from django.http import HttpResponse
from django.contrib.auth.models import User
from .forms import LoginForm,RegisterForm
from django.contrib.auth import login,logout,authenticate
from django.core.mail import send_mail as sm
from .tokens import account_activation_token
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text

def register(request):
    if request.user.is_authenticated:
        return HttpResponse("You are authenticated")
    context="login"
    login_form=LoginForm()
    register_form=RegisterForm()
    if request.method=='POST':
        isValid=False
        if request.POST.get("context")== "login":
            login_form,isValid=handleLogin(request)
            if isValid:
                return redirect('/')
        else:
            register_form,isValid=handleRegister(request)
            if isValid:
                return redirect('confirm/')
    return render(request,'register/register.html',{'form_login':login_form,'form_register':register_form})


def handleLogin(request):

    result=LoginForm(data=request.POST)
    if result.is_valid():
        typedPassword=result.cleaned_data['password']
        mail=result.cleaned_data['loginemail']
        count=User.objects.filter(email=mail).count()
        if count>0:
            user=User.objects.get(email=mail)
            u=authenticate(request,username=user.username,password=typedPassword)
            if u is not None:
                login(request,user)
                return (result,True)
    result.add_error(None,"The username or password is not correct")
    return (result,False)


def handleRegister(request):
    result=RegisterForm(data=request.POST)
    if result.is_valid():
        name=result.cleaned_data['name']
        email=result.cleaned_data['registeremail']
        password1=result.cleaned_data['password1']
        print(email)
        u=User(username=name,email=email)
        u.set_password(password1)
        u.save()
        url=""
        url+=str(get_current_site(request))+"/register/verify/"
        token=account_activation_token.make_token(user=u)
        url+=str(urlsafe_base64_encode(force_bytes(u.pk)))+"/"+str(token)
        send_mail(url,email)
        return (result,True)
    return (result,False)



def check(request):
    if request.is_ajax():
        if(request.GET['type'] == 'username'):
            name=request.GET['name']
            u=User.objects.filter(username=name).count()
            if( u >0):
                return HttpResponse("false")
        elif(request.GET['type']=='mail'):
                mail=request.GET['email']
                u=User.objects.filter(email=mail).count()
                if(u >0):
                    return HttpResponse("false")
        return HttpResponse("true")
    else:
        return HttpResponse("Not Authorized")


def logout_view(request):
    logout(request)
    return redirect('/')



def confirm(request):
    return render(request,'register/confirm.html')


def verify(request,uidb64,token):
    print(f"This is the token {token}")
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.save()
        login(request, user)
        return HttpResponse('Registered')
    return HttpResponse('Invalid')


def send_mail(link,email):
    res = sm(
        subject = 'This is the verification code sent',
        message = f'you asked for this {link}',
        from_email = 'helloworld123world@yandex.com',
        recipient_list = [ email,],
        fail_silently=False,
    )
