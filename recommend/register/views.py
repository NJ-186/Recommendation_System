from django.shortcuts import render
from django import forms
# Create your views here.
from django.http import HttpResponse



class NameForm(forms.Form):
    name=forms.CharField(label="Your name",max_length=100)
    email=forms.EmailField(label="Enter your Email")


def register(request):
    if request.method=='POST':
        form=NameForm(request.POST)
        if form.is_valid():
            return HttpResponse("Submitted successfully")
        else:
            return HttpResponse("Not submitted")
    else:
        form=NameForm()
    return render(request,'register/register.html',{'form':form})
