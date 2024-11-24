from django.shortcuts import render

def home(request):
    return render(request, 'app_name/your_existing_file.html')
