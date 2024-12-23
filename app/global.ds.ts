interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  services: string[];
}

interface DefaultFirestoreProps {
  createAt: Date;
  updateAt: Date;
  updateBy: string;
  isDeleted: boolean;
}

interface Payment {
  id: string;
  clientId: string;
  billing: {
    method: string;
    service: "izipay" | "culqi";
    totalPrice: string;
  };
  contact: {
    documentNumber: string;
    email: string;
    firstName: string;
    maternalSurname: string;
    paternalSurname: string;
    phone: {
      prefix: string;
      number: string;
    };
  };
  product: {
    type: "product" | "service";
    name: string;
    price: string;
  };
  service: {
    id: "izipay";
    events: {
      formTokenCreationDate: Date;
      paymentNotification: any;
    };
  };
}
