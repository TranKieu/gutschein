/** bảng abgelauft sau 3năm sẽ hết hạn
 * -tại Gutschein- component có button Abgelauft(sau 3 năm mới hiện lên)
 * - có component list ra => tính tổng
 * - list theo khoảng thời gian => tính tổng
 * - muốn xóa thì vào console
 */
export interface Abgelauft {
  id?: string;
  idGutschein: string; // lấy về vì khi bán có kèm id
  createdAt: number;
  wert: number;
  restbetrag: number;
}
