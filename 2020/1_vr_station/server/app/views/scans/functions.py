from ...models import Scans
from .serializer import ScanSerializer


def get_scan_by_pk(pk):
    models = Scans.objects.all().order_by('name')
    model = models.filter(pk=pk).first()

    if not model:
        return {
            'success': False,
            'message': 'Scan not found'
        }

    scan = ScanSerializer(model).data

    next_scan = models.filter(name__gt=model.name).first()
    prev_scan = models.filter(name__lt=model.name).last()

    if next_scan:
        next_scan = {
            'name': next_scan.name,
            'pk': next_scan.pk
        }
    else:
        next_scan = False

    if prev_scan:
        prev_scan = {
            'name': prev_scan.name,
            'pk': prev_scan.pk
        }
    else:
        prev_scan = False

    return {
        'success': True,
        'message': 'Scan fetched successfully',
        'current': scan,
        'next': next_scan,
        'previous': prev_scan
    }
