import {Modal} from "react-responsive-modal";
import React from "react";
import {editTask} from "../utils";

function ModalEdit({
	isModalEditOpen, setIsModalEditOpen, setModalEditTask,
    modalEditTask, reloadTasks
}) {
    const submitTaskEdit = () => {
        setIsModalEditOpen(false);
        editTask(modalEditTask).then(() => {
            reloadTasks();
        });
    };

    return (
        <Modal open={isModalEditOpen} center
        	onClose={() => setIsModalEditOpen(false)}>
            <div className="modal-content">
                <h2 className="modal-header">Edit Task</h2>
                <h3 className="modal-input-header">Title</h3>
                <input type="text" value={modalEditTask.name}
                       className="modal-input"
                       onChange={(e) => setModalEditTask({
                       	...modalEditTask,
                        name: e.target.value
                       })}
                />
               
                <div className="modal-actions">
                    <button className="modal-btn modal-btn-cancel"
                            onClick={() => setIsModalEditOpen(false)}
                    >Close
                    </button>
                    <button className="modal-btn modal-btn-submit"
                            onClick={submitTaskEdit}
                    >Save</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalEdit;