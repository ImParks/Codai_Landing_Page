import styles from './InputMolecules.module.css'
import { InputMoleculesProps } from './InputMolecules.types'
import { useState } from 'react'
import { Input } from '@/components/atoms/Input/Input'  
import { Image } from '@/components/atoms/Image/Image'
import React from 'react'
import { Button } from '@/components/atoms/Button/Button'

export const InputMolecules = React.forwardRef<HTMLInputElement, InputMoleculesProps>(
  ({inputId, onChange, type='text', placeholderText, message, className, image, iconToggle, value, variant='default'}, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleContainerClick = () => {
      if (ref && 'current' in ref && ref.current) {
        ref.current.focus();
      }
    }

    const handleFocus = () => {
      setIsFocused(true);
    }

    const handleBlur = () => {
      setIsFocused(false);
    }

    return (
      <div className={styles.inputBox}>
        <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`} onClick={handleContainerClick}>
          <Input 
            id={inputId}
            className={`${className}`} 
            type={type} 
            onChange={onChange} 
            placeholder={placeholderText}
            ref={ref} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            variant={variant}
          />
          {image && 
            <div className={styles.imageContainer}>
              <Button variant='icon' onClick={() => {iconToggle && iconToggle()}} buttonType='button' >  
                <Image id={`image + ${inputId}`} image={image} alt="leftIcon" width={24} height={24} />
              </Button>
            </div>
          }
        </div>
        {message && <div className={styles.message}>{message}</div>}
      </div>
    )
  }
);