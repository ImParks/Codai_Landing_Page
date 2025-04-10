import { Input } from "@/components/atoms/Input/Input"
import styles from "./CheckboxMolecules.module.css"
import { CheckboxMoleculesProps } from "./CheckboxMolecules.types"
import { Span } from "@/components/atoms/Span/Span"
import React from "react"

export const CheckboxMolecules = React.forwardRef<HTMLInputElement, CheckboxMoleculesProps>(
  ({ id, text, onChange }, ref) => {
    return (
      <div className={`${styles.checkboxContainer} ${styles.text}`}>
        <Input type="checkbox" id={id} placeholder="checkbox" ref={ref} onChange={onChange} variant="checkbox" />
        {text && <Span>{text}</Span>}
      </div>
    );
  }
);