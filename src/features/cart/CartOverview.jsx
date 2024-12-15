import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
	const totalCartQuantity = useSelector(getTotalCartQuantity);
	const totalCartPrice = useSelector(getTotalCartPrice);

	if (!totalCartQuantity) return null;

	return (
		<div className="flex justify-between items-center py-4 px-4 sm:px-6 bg-stone-800 text-stone-200 uppercase text-sm md:text-base">
			<p className="space-x-4 sm:space-x-6 text-stone-300 font-semibold">
				<span>{totalCartQuantity} pizzas</span>
				<span>{formatCurrency(totalCartPrice)}</span>
			</p>
			<Link to="/cart">Open cart</Link>
		</div>
	);
}

export default CartOverview;
