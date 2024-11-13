import { Card, CardBody } from "@nextui-org/react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState, useContext } from "react";
import { FieldContext } from "../context/FieldContext";

const Admin = () => {
  const { fields, addField, editField, deleteField } = useContext(FieldContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newField, setNewField] = useState({
    descripcion: "",
    precio: "",
    estado: "Disponible",
  });
  const [editingFieldIndex, setEditingFieldIndex] = useState(null);

  // Función para abrir el modal para añadir o editar cancha
  const openAddModal = () => {
    setNewField({ descripcion: "", precio: "", estado: "Disponible" });
    setEditingFieldIndex(null);
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    const fieldToEdit = fields[index];
    setNewField(fieldToEdit);
    setEditingFieldIndex(index);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewField({ descripcion: "", precio: "", estado: "Disponible" });
    setEditingFieldIndex(null);
  };

  // Manejar cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para añadir o editar cancha
  const handleSaveField = async () => {
    if (!newField.descripcion || !newField.precio) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const fieldData = {
        descripcion: newField.descripcion,
        precio: parseFloat(newField.precio),
        estado: newField.estado,
      };

      if (editingFieldIndex !== null) {
        const fieldToEdit = fields[editingFieldIndex];
        await editField(fieldToEdit._id, fieldData);
      } else {
        await addField(fieldData);
      }
      closeModal();
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Error al guardar la cancha');
    }
  };

  // Función para eliminar una cancha
  const handleDeleteField = async (index) => {
    const fieldToDelete = fields[index];
    if (!fieldToDelete?._id) {
      alert('ID de cancha inválido');
      return;
    }

    if (window.confirm("¿Estás seguro de que quieres eliminar esta cancha?")) {
      try {
        await deleteField(fieldToDelete._id);
      } catch (error) {
        console.error('Error:', error);
        alert(error.response?.data?.message || 'Error al eliminar la cancha');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <button
          onClick={openAddModal}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Añadir Cancha +
        </button>
      </div>

      {/* Lista de canchas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field, index) => (
          <Card key={index} className="shadow-lg hover:scale-105 transform transition duration-300 relative">
            <CardBody className="p-4">
              <h4 className="text-xl font-bold">{field.descripcion}</h4>
              <p>Precio: ${field.precio}</p>
              <p>Estado: {field.estado}</p>
            </CardBody>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => openEditModal(index)}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
              >
                <MdEdit />
              </button>
              <button
                onClick={() => handleDeleteField(index)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                <MdDelete />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal para añadir/editar cancha */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <h2 className="text-2xl font-bold mb-4">
              {editingFieldIndex !== null ? "Editar Cancha" : "Añadir Nueva Cancha"}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={newField.descripcion}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                name="precio"
                placeholder="Precio"
                value={newField.precio}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              />
              <select
                name="estado"
                value={newField.estado}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              >
                <option value="Disponible">Disponible</option>
                <option value="Ocupada">Ocupada</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveField}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                {editingFieldIndex !== null ? "Guardar Cambios" : "Añadir Cancha"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
