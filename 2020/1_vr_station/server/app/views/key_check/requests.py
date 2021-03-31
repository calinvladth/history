from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .functions import check_key


class GET_KEY(APIView):
    def get(self, request):
        # Check if Authorization key matches the created key
        key = request.headers.get('Authorization')
        ck = check_key(key)
        print('RESP', {
            'success': ck['success'],
            'message': ck['message'],
            'key': key
        })
        return Response({
            'success': ck['success'],
            'message': ck['message'],
            'match': ck['success'],
            'key': key
        }, status=status.HTTP_200_OK if ck['success'] else status.HTTP_400_BAD_REQUEST)
