import './Modal.css';

export default function Modal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete?</p>
        <div className="modal-actions">
          <button className='first' onClick={onConfirm}>Yes</button>
          <button className="secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
