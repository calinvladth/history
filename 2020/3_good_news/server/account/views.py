from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


# Create your views here.

class Login(APIView):
    def post(self, request):
        # username = request.data['username']
        email = request.data.get('email')
        password = request.data.get('password')

        if email is None or password is None:
            return Response({'success': False, 'message': 'Your username or password are missing'},
                            status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.filter(email=email)
        if user.count() == 1:
            user = user.first()
        else:
            return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_404_NOT_FOUND)
        if not user.check_password(raw_password=password):
            return Response({'success': False, 'message': 'Invalid credentials'}, status=status.HTTP_404_NOT_FOUND)

        token, _ = Token.objects.get_or_create(user=user)

        return Response({
            'success': True,
            'message': 'Hola',
            'token': token.key}, status=status.HTTP_200_OK)
