import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "../../service/products.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  providers: [NgbModalConfig, NgbModal]
})

export class ProductsComponent implements OnInit {
  products: {}
  product: {
    productId: number,
    name: string,
    category: string
  }
  @ViewChild('fileInput') fileInput: ElementRef;

  editForm = new FormGroup( {
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl('')
  })

  createForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl('')
  })

  imageForm = new FormGroup({
    image: new FormControl(null)
  })

  detailForm = new FormGroup({
    text: new FormControl(null)
  })

  quantityForm = new FormGroup({
    quantity: new FormControl(0),
    more: new FormControl(false),
    less: new FormControl(false)
  })

  constructor(
    private productsService: ProductsService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.productsService.list().subscribe((result) => {
      this.products = result.data
      console.log('Products: ', this.products)
    })
  }

  quantityModal(quantitycontent, productData) {
    this.product = productData
    this.modalService.open(quantitycontent)
  }

  // Bug
  quantity(data, product) {
    this.productsService.editQuantity(data, product.productId).subscribe((reult) => {
      this.ngOnInit()
    })
  }

  detailModal(detailscontent, productData) {
    this.product = productData
    this.modalService.open(detailscontent)
  }

  detail(data, product) {
    this.productsService.createDetail({text: data}, product.productId).subscribe(() => {
      this.ngOnInit()
    })
  }

  imageModal(imagecontent, productData) {
    this.product = productData
    this.imageForm.get('image').setValue(null);
    this.modalService.open(imagecontent)
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.imageForm.get('image').setValue(file)
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('image', this.imageForm.get('image').value);
    return input;
  }

  createImage(data, product) {
    const formModel = this.prepareSave();
    this.productsService.createImage(formModel, product.productId).subscribe(() => {
      this.ngOnInit()
    })
  }

  deleteImage(data) {
    console.log('delete: ', data)
    this.productsService.deleteImage(data).subscribe(() => {
      this.ngOnInit()
    })
  }

  createModal(createcontent) {
    this.modalService.open(createcontent)
  }

  create(data) {
    this.productsService.create(data.value).subscribe((result) => {
      this.ngOnInit()
    })
  }

  editModal(editcontent, productData) {
    this.product = productData
    this.modalService.open(editcontent)

    this.editForm = new FormGroup( {
      productId: new FormControl(`${productData.productId}`),
      name: new FormControl(`${productData.name}`),
      price: new FormControl(`${productData.price}`),
      category: new FormControl(`${productData.category}`)
    })
  }

  edit(data) {
    console.log(data)
    this.productsService.edit(data.value).subscribe(() => {
      this.ngOnInit()
    })
  }

  delete(id) {
    this.productsService.delete(id).subscribe(() => {
      this.ngOnInit()
    })
  }

}
