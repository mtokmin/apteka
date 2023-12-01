import { makeAutoObservable } from "mobx";

export default class ProductStore {
 
  constructor() {
    this._types = [
      {id: 1, name: "Простуда, грипп"},
      {id: 2, name: "Аллергия"}
    ];
    this._categories = [
      {id: 1, name: "Жаропонижающие"},
      {id: 2, name: "Для горла"}
    ];
    this._products = [
      {id: 1, name: "Анвимакс лимон 5 г пак x12", price: 474.80, img: `https://klassika-apteka.ru/upload/resize_cache/iblock/861/300_300_1/7euxsqblolo7fwgpv81iruhqcijhhajm.jpg`},
      {id: 2, name: "Стрепсилс табл д/рассас ментол-эвкалипт кор x36", price: 360, img: `https://klassika-apteka.ru/upload/resize_cache/iblock/025/300_300_1/ll164pmpxbzqnyza3is4srhtjay11xai.jpg`},
      {id: 3, name: "Цетрин табл 10 мг x20", price: 168.90, img: `https://klassika-apteka.ru/upload/iblock/5f2/s5e3vvjf3820yfnrl74gouy071v0yt0w.jpg`}
    ]
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setProducts(products) {
    this._products = products;
  }

  get types() {
    return this._types;
  }

  get categories() {
    return this._categories;
  }

  get products() {
    return this._products;
  }
}