from rest_framework import status
from rest_framework.response import Response
from .models import Log
from .serializer import LogSerializer
from rest_framework.views import APIView


class LogView(APIView):
    def get(self, request):
        logs = Log.objects.all().order_by('-created')
        serializer = LogSerializer(logs, many=True)

        return Response({
            'success': True,
            'message': 'Logs fetched successfully',
            'data': serializer.data
        })

    @staticmethod
    def create_log(log):
        print('CREATE LOG VIEW: ', log)
