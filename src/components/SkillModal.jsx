import React, { useEffect } from "react";

const SkillModal = ({ skill, onClose }) => {
  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);
  return (
    <div
      className="modal"
      style={{ display: "flex" }}
      onClick={e => e.target.className === "modal" && onClose()}
    >
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>×</span>
        <div className="modal-icon">
          <i className={skill.icon}></i>
        </div>
        <h3 className="modal-title">{skill.name}</h3>
        <p className="modal-details">{skill.details}</p>
      </div>
    </div>
  );
};
export default SkillModal;