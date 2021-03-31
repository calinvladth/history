from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from ...models import Category
from ...serializers import CategorySerializer
from django.core.paginator import Paginator

#Create / Read / Update category


class GetPost(APIView):

    def get(self, request):
        model = Category.objects.filter(belongs_to=request.user.pk).order_by('created_at').reverse()

        # Paginator
        limit = 5
        paginator = Paginator(model, limit)
        pages = paginator.num_pages
        page = request.GET.get('page') or 1
        if int(page) > pages:
            page = pages
        if int(page) < 1:
            page = 1

        paginated_model = paginator.get_page(page)
        paginated_serializer = CategorySerializer(paginated_model, many=True)
        serializer = CategorySerializer(model, many=True)

        return Response({'data': paginated_serializer.data, 'full_data': serializer.data, 'pages': pages, 'page': int(page)}, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['belongs_to'] = request.user.pk
        serializer = CategorySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Category was created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'success': False, 'message': 'Category was not created'}, status=status.HTTP_400_BAD_REQUEST)


class Put(APIView):

    def put(self, request, pk):
        model = Category.objects.get(pk=pk)
        serializer = CategorySerializer(model, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Category was updated successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'success': False, 'message': 'Category was not updated'}, status=status.HTTP_400_BAD_REQUEST)
