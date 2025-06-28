import './Modal.css';

export default function Modal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete this fav?</p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button className="secondary" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
