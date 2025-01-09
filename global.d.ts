interface SettingDefault {
  version: string;
}

interface Image extends Archive {
  thumbUrl: string;
}

interface Archive {
  uid: string;
  url: string;
  name: string;
}

type RoleCode = "administrator" | "user";

interface User extends DefaultFirestoreProps {
  email: string;
  firstName: string;
  id: string;
  isDeleted: boolean;
  maternalSurname: string;
  password: string;
  paternalSurname: string;
  roleCode: RoleCode;
}
