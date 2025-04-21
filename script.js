// ProductProperties

class ProductProperties {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalValue() {
      return this.price * this.quantity;
    }
  
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
  
    static applyDiscount(products, discount) {
      products.forEach(product => {
        product.price -= product.price * discount;
      });
    }
  }
    
// PerishableProductProperties

  class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  
    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }
  
// store class

  class Store {
    constructor() {
      this.inventory = [];
    }
  
    addProduct(product) {
      this.inventory.push(product);
    }
  
    getInventoryValue() {
      return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
  
    findProductByName(name) {
      return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
    }
  }
  
// store instance

  const myStore = new Store();
  
// products  

  const apple = new ProductProperties("Apple", 0.5, 100);
  const banana = new ProductProperties("Banana", 0.3, 150);
  const orangeJuice = new ProductProperties("Orange Juice", 3.99, 20);
  const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-12-31");
  const coffee = new PerishableProductProperties("coffee", 5.50, 3, "2024-12-30");
  
// Add products  

  myStore.addProduct(apple);
  myStore.addProduct(banana);
  myStore.addProduct(orangeJuice);
  myStore.addProduct(milk);
  myStore.addProduct(coffee);
  
// Total value before discount  

  console.log("Total Inventory Value (Before Discount): $" + myStore.getInventoryValue().toFixed(2));
  
// 15% discount

  ProductProperties.applyDiscount(myStore.inventory, 0.15);
  
// Total value after discount

  console.log("Total Inventory Value (After 15% Discount): $" + myStore.getInventoryValue().toFixed(2));
  
  
  const searched = myStore.findProductByName("coffee");
  console.log(searched ? searched.toString() : "Product not found.");
  