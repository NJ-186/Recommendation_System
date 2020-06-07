from django.shortcuts import render

def music(request):
    return render(request,'functionality/music.html')
def books(request):
    return render(request,'functionality/books.html')
def movies(request):
    return render(request,'functionality/movies.html')
