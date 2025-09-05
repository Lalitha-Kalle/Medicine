// src/App.jsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [medicine, setMedicine] = useState({
    name: "",
    category: "",
    subCategory: "",
    form: "",
    units: "",
    productCode: "",
    strength: "",
    stripsPerPack: "",
    quantity: "",
    unitPrice: "",
    expiryDate: "",
    gst: "",
    batchNo: "",
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const addMedicine = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "medicines"), {
        ...medicine,
        stripsPerPack: Number(medicine.stripsPerPack),
        quantity: Number(medicine.quantity),
        unitPrice: Number(medicine.unitPrice),
        gst: Number(medicine.gst),
        expiryDate: new Date(medicine.expiryDate),
        createdAt: new Date(),
      });
      alert("✅ Medicine added successfully!");
      setMedicine({
        name: "",
        category: "",
        subCategory: "",
        form: "",
        units: "",
        productCode: "",
        strength: "",
        stripsPerPack: "",
        quantity: "",
        unitPrice: "",
        expiryDate: "",
        gst: "",
        batchNo: "",
      });
    } catch (error) {
      alert("❌ Error adding medicine: " + error.message);
    }
  };

  return (
    <div style={{ minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>


    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>💊 Add New Medicine</h2>
      <form onSubmit={addMedicine} style={{ display: "grid", gap: "10px" }}>
        <input name="name" value={medicine.name} onChange={handleChange} placeholder="Medicine Name" required />
        <input name="category" value={medicine.category} onChange={handleChange} placeholder="Category" required />
        <input name="subCategory" value={medicine.subCategory} onChange={handleChange} placeholder="Sub Category" />
        <input name="form" value={medicine.form} onChange={handleChange} placeholder="Form (Tablet/Syrup)" />
        <input name="units" value={medicine.units} onChange={handleChange} placeholder="Units (mg/ml)" />
        <input name="productCode" value={medicine.productCode} onChange={handleChange} placeholder="Product Code" />
        <input name="strength" value={medicine.strength} onChange={handleChange} placeholder="Strength (500mg)" />
        <input type="number" name="stripsPerPack" value={medicine.stripsPerPack} onChange={handleChange} placeholder="Strips per Pack" />
        <input type="number" name="quantity" value={medicine.quantity} onChange={handleChange} placeholder="Quantity" />
        <input type="number" name="unitPrice" value={medicine.unitPrice} onChange={handleChange} placeholder="Unit Price" />
        <input type="date" name="expiryDate" value={medicine.expiryDate} onChange={handleChange} placeholder="Expiry Date" />
        <input type="number" name="gst" value={medicine.gst} onChange={handleChange} placeholder="GST (%)" />
        <input name="batchNo" value={medicine.batchNo} onChange={handleChange} placeholder="Batch No" />

        <button type="submit">➕ Add Medicine</button>
      </form>
    </div>
        </div>
  );
}

export default App;
