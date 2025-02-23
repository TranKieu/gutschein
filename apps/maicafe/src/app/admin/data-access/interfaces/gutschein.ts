export interface KaufBetrag {
  betrag: number;
  kaufdatum: number;
}

// bảng gutscheine
export interface Gutschein {
  id?: string;
  createdAt: number;
  wert: number;

  restBetrag: number;
  // mỗi lần mua
  einloesen: KaufBetrag[];
}
/** lưu
 * new  Date( 2024, 8, 15 ).getTime();
 * (new Date("2024-11-2")).getTime()
 * new Date().setHours(0,0,0,0)/1000
 */

/* * 1000
const options = { year: "2-digit" , month: "2-digit",  day: '2-digit'};
const optionsMon = { day: '2-digit', year: "numeric" , month: "long"};  //09. Februar 2025
const date = new Date(1739055600000).toLocaleDateString('de-DE',optionsMon);
console.log(date);
*/
