from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from ...models import WalletActivity, Category
from ...serializers import WalletActivitySerializer, CategorySerializer
import random
import randomcolor

# Move this to a Stats or Future folder


class GetTops(APIView):
    def get(self, request):
        category_model = Category.objects.filter(belongs_to=request.user.pk)
        category_serializer = CategorySerializer(category_model, many=True)
        wallet_activity_model = WalletActivity.objects.filter(belongs_to=request.user.pk)
        wallet_activity_serializer = WalletActivitySerializer(wallet_activity_model, many=True)

        # Get the top spending / revenue | Total | Per Category

        top_final_revenue = []
        top_final_spending = []
        total_revenue = 0
        total_spending = 0

        # For each category, I look through each wallet_activity and I sum the total
        for category in category_serializer.data:
            top_revenue = {'category_name': str, 'category_id': int, 'total': 0, 'color': ''}
            top_spending = {'category_name': str, 'category_id': int, 'total': 0, 'color': ''}

            # Generate a random color
            rand_color = randomcolor.RandomColor()

            for activity in wallet_activity_serializer.data:

                if activity['category'] == category['id'] and activity['revenue']:
                    # This generates a random color
                    # top_revenue['color'] = rand_color.generate(luminosity='dark', hue='red', format_='hex')
                    top_revenue['color'] = '#941400'
                    top_revenue['category_name'] = category['name']
                    top_revenue['category_id'] = category['id']
                    top_revenue['total'] += activity['amount']
                    total_revenue += activity['amount']

                if activity['category'] == category['id'] and not activity['revenue']:
                    # top_spending['color'] = rand_color.generate(luminosity='dark', hue='red', format_='hex')
                    top_spending['color'] = '#941400'
                    top_spending['category_name'] = category['name']
                    top_spending['category_id'] = category['id']
                    top_spending['total'] += activity['amount']
                    total_spending += activity['amount']

            # After the activity loop is done, I push the data in the list
            if top_revenue['total'] and top_revenue['category_name'] and top_revenue['category_id']:
                top_final_revenue.append(dict(top_revenue))
            if top_spending['total'] and top_spending['category_name'] and top_spending['category_id']:
                top_final_spending.append(dict(top_spending))

        revenue_subtract_spending = total_revenue - total_spending
        cash_flow = total_revenue + total_spending

        sorted_top_revenue = sorted(top_final_revenue, key=lambda x: x['total'], reverse=True)
        sorted_top_spending = sorted(top_final_spending, key=lambda x: x['total'], reverse=True)

        top_five_revenue = []
        top_five_spending = []

        for x in range(0, 5):
            if len(sorted_top_revenue) > x:
                top_five_revenue.append(sorted_top_revenue[x])

            if len(sorted_top_spending) > x:
                top_five_spending.append(sorted_top_spending[x])

        return Response({
            'top_revenue': top_five_revenue,
            'total_revenue': total_revenue,
            'top_spending': top_five_spending,
            'total_spending': total_spending,
            'revenue-spending': revenue_subtract_spending,
            'cash_flow': cash_flow
        })


