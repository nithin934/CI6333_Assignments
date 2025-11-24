import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  incrementQty,
  decrementQty,
  deleteItem,
  clearCart,
} from "../redux/actions/cartActions";

const CATALOG = [
  { id: "p1", name: "Notebook", price: 4.5 },
  { id: "p2", name: "Markers", price: 6.0 },
  { id: "p3", name: "Backpack", price: 29.99 },
  { id: "p4", name: "Water Bottle", price: 12.99 },
];

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    const count = items.reduce((sum, i) => sum + i.qty, 0);

    return { subtotal, tax, total, count };
  }, [items]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Shopping Cart (Redux)</h2>

      <div style={{ display: "flex", gap: 20 }}>
        {/* CATALOG */}
        <div style={{ flex: 1 }}>
          <h3>Catalog</h3>
          {CATALOG.map((p) => (
            <div key={p.id} style={{ marginBottom: 8 }}>
              {p.name} (${p.price})
              <button
                style={{ marginLeft: 10 }}
                onClick={() => dispatch(addItem(p))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* CART */}
        <div style={{ flex: 1 }}>
          <h3>Cart</h3>

          {items.length === 0 ? (
            <p>No items in the cart. Please add products.</p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div>
                    <strong>{item.name}</strong> (${item.price})  
                    <div>Line total: ${(item.qty * item.price).toFixed(2)}</div>
                  </div>

                  <div>
                    <button onClick={() => dispatch(decrementQty(item.id))}>
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{item.qty}</span>
                    <button onClick={() => dispatch(incrementQty(item.id))}>
                      +
                    </button>
                    <button
                      style={{ marginLeft: 10, color: "red" }}
                      onClick={() => dispatch(deleteItem(item.id))}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}

              <hr />

              <p>Items: {summary.count}</p>
              <p>Subtotal: ${summary.subtotal.toFixed(2)}</p>
              <p>Tax (8%): ${summary.tax.toFixed(2)}</p>
              <p><strong>Total: ${summary.total.toFixed(2)}</strong></p>

              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
