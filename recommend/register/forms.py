from django import forms

class LoginForm(forms.Form):
    loginemail=forms.CharField(widget=forms.EmailInput(attrs={'placeholder':'Enter Email','class':'form-control','data-error':'#lemailerror'}),max_length=100)
    password=forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Enter Password','class':'form-control','data-error':'#passworderror'}))




class RegisterForm(forms.Form):
    name=forms.CharField(max_length=100,widget=forms.TextInput(attrs={'placeholder':'Enter Name','class':'form-control','data-error':'#nameerror'}))
    registeremail=forms.EmailField(max_length=100,widget=forms.EmailInput(attrs={'placeholder':'Enter Email','class':'form-control','data-error':'#remailerror'}))
    password1=forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Enter Password','class':'form-control','data-error':'#password1error'}))
    password2=forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Confirm Password','class':'form-control','data-error':'#password2error'}))
