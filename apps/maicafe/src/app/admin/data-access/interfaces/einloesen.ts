/** bảng einloesen
 *  rest = 0 => hiện button xóa
 *  khi quản lý (xóa) gutschein thì sẽ lưu vào đây
 * + biết sẽ hết => ấn xóa luôn
 * + tránh ghi nhầm nó tự xóa
 */
export interface Einloesen {
  id?: string;
  createdAt: number;
  wert: number;
}
