from django.shortcuts import render
from django import forms
# Create your views here.
from django.http import HttpResponse

from .forms import LoginForm,RegisterForm


def register(request):
    context="login"
    login_form=LoginForm()
    register_form=RegisterForm()
    if request.method=='POST':
        isValid=False
        print(request.POST.get("context"))
        if request.POST.get("context")== "login":
            login_form,isValid=handleLogin(request)
        else:
            register_form,isValid=handleRegister(request)
        if isValid:
            return HttpResponse("Submitted successfully")
    return render(request,'register/register.html',{'form_login':login_form,'form_register':register_form})



def handleLogin(request):
    result=LoginForm(data=request.POST)
    if result.is_valid():
        return (result,True)
    return (result,False)




def handleRegister(request):
    result=RegisterForm(data=request.POST)
    if result.is_valid():
        return (result,True)
    print(result.errors)
    return (result,False)
