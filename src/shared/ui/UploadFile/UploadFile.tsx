import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, useMemo } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'

import { MAX_FILE_SIZE } from '@/shared/constants/common'
import { ErrorMessage, P14 } from '@/shared/ui/Typography'
import { UploadSection } from '@/shared/ui/UploadFile/UploadSection'

export const UploadFile = forwardRef<
  HTMLDivElement,
  { value: File | null; onChange: (v: File) => void; error?: string }
>((props, ref) => {
  const { value, onChange, error } = props
  const { setError, clearErrors } = useFormContext()

  const onDrop = (acceptedFiles: File[]) => {
    onChange(acceptedFiles[0])
    clearErrors('file')
  }

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    onDropRejected: () => (files: FileRejection[]) => {
      files.forEach((el) =>
        el.errors?.forEach(({ code }) => {
          switch (code) {
            case 'file-invalid-type': {
              setError('file', { message: 'Invalid file type' })
              break
            }
            case 'file-too-large': {
              setError('file', { message: 'File too large' })
              break
            }
          }
        })
      )
    },
    maxFiles: 1,
    noClick: true,
    multiple: false,
    maxSize: MAX_FILE_SIZE,
    // accept,
  })

  const { setValue } = useFormContext()

  const file = useMemo(() => {
    if ((value as File)?.type.startsWith('image/')) {
      return URL.createObjectURL(value as Blob)
    } else {
      return null
    }
  }, [value])

  return (
    <div className="mt-3" ref={ref}>
      {value ? (
        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 w-fit">
          <div className="w-fit grid-cols-1 relative">
            {file ? (
              <div className="relative  w-fit overflow-hidden">
                <img
                  src={file}
                  className="h-full max-w-[100px] object-contain"
                  alt="upload"
                />
              </div>
            ) : (
              <FontAwesomeIcon
                className="text-sbm-neutral-100"
                size="3x"
                icon={faFile}
              />
            )}

            <button
              className="flex items-center justify-center -top-3 -right-3 bg-sbm-white w-5 h-5  transition rounded-full border-2 border-sbm-neutral absolute
                text-sbm-neutral  mt-auto  hover:text-sbm-secondary hover:border-sbm-secondary  leading-normal"
              type="button"
              onClick={() => {
                clearErrors('file')
                setValue('file', null)
              }}
            >
              <FontAwesomeIcon size="sm" icon={faXmark} />
            </button>
          </div>

          <div className="col-span-2">
            <P14>
              <b>File:</b> {(value as File).name}
            </P14>
          </div>
        </div>
      ) : (
        <UploadSection
          open={open}
          error={'123'}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          isDragActive={isDragActive}
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
})
