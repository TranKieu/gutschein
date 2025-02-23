// bảng usergutscheine
export interface UserGutschein {
  idGutschein: string; // lấy từ gutschein
  id?: string;
  createdAt: number;
  wert: number; // giá trị ban đầu
  restbetrag: number;
}
