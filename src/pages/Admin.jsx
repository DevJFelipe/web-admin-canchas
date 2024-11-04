import { Card, CardBody, Image } from "@nextui-org/react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState, useContext } from "react";
import { Input, Button, Modal, Textarea } from "@nextui-org/react";
import { FieldContext } from "../context/FieldContext";

const Admin = () => {
  const { fields, addField, editField, deleteField } = useContext(FieldContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newField, setNewField] = useState({
    title: "",
    address: "",
    imageSrc: "",
    rating: 5,
  });
  const [editingFieldIndex, setEditingFieldIndex] = useState(null);

  // Función para abrir el modal para añadir una nueva cancha
  const openAddModal = () => {
    setNewField({ title: "", address: "", imageSrc: "", rating: 5 });
    setEditingFieldIndex(null);
    setIsModalOpen(true);
  };

  // Función para abrir el modal para editar una cancha
  const openEditModal = (index) => {
    setEditingFieldIndex(index);
    setNewField(fields[index]);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewField({ title: "", address: "", imageSrc: "", rating: 5 });
    setEditingFieldIndex(null);
  };

  // Función para manejar los cambios en el formulario de añadir/editar cancha
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewField({ ...newField, [name]: value });
  };

  // Función para guardar cambios (añadir o editar)
  const handleSaveField = () => {
    if (editingFieldIndex !== null) {
      editField(editingFieldIndex, newField);
    } else {
      addField(newField);
    }
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <Button
          onClick={openAddModal}
          auto
          className="bg-green-500 text-white hover:bg-green-600"
        >
          Añadir Cancha +
        </Button>
      </div>

      {/* Lista de canchas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field, index) => (
          <Card key={index} className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative">
            <Image
              src={field.imageSrc}
              alt={field.title}
              className="w-full h-36 object-cover"
            />
            <CardBody className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold">{field.title}</h4>
                <span className="text-green-500">{field.rating} ★</span>
              </div>
              <p className="text-sm text-gray-600">{field.address}</p>
            </CardBody>
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                auto
                onClick={() => openEditModal(index)}
                className="bg-yellow-500 text-white hover:bg-yellow-600"
              >
                <MdEdit />
              </Button>
              <Button
                auto
                onClick={() => deleteField(index)}
                className="bg-red-500 text-white hover:bg-red-600"
              >
                <MdDelete />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal para añadir o editar una cancha */}
      <Modal open={isModalOpen} onClose={closeModal} preventClose>
        <Modal.Header>
          <h2 className="text-xl font-bold">{editingFieldIndex !== null ? 'Editar Cancha' : 'Añadir Nueva Cancha'}</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <Input
              label="Nombre de la cancha"
              name="title"
              fullWidth
              value={newField.title}
              onChange={handleInputChange}
            />
            <Textarea
              label="Dirección"
              name="address"
              fullWidth
              value={newField.address}
              onChange={handleInputChange}
            />
            <Input
              label="URL de la Imagen"
              name="imageSrc"
              fullWidth
              value={newField.imageSrc}
              onChange={handleInputChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeModal} className="mr-2">
            Cancelar
          </Button>
          <Button
            auto
            onClick={handleSaveField}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            {editingFieldIndex !== null ? 'Guardar Cambios' : 'Añadir Cancha'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
