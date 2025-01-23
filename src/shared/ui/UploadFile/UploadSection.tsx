import { clsx } from 'clsx'
import React from 'react'
import { DropzoneState } from 'react-dropzone'

import { Upload } from '@/assets/icon/upload'
import { P14 } from '@/shared/ui/Typography'

interface IProps {
  getRootProps: DropzoneState['getRootProps']
  isDragActive: boolean
  error?: string
  getInputProps: DropzoneState['getInputProps']
  open: () => void
}

export const UploadSection = ({
  getRootProps,
  isDragActive,
  error,
  getInputProps,
  open,
}: IProps) => {
  return (
    <div
      {...getRootProps({
        onClick: open,
      })}
      className={clsx(
        'border border-sbm-neutral-100 bg-sbm-white  border-dashed border-neutral-05 flex  mx-auto transition hover:bg-neutral-01 cursor-pointer',
        'flex-col items-center justify-center text-center w-full rounded-lg px-5 py-5',
        {
          '!bg-sbm-neutral-200': isDragActive,
          '!border-sbm-error !bg-sbm-error/10': !!error,
        }
      )}
    >
      <Upload width={32} height={32} />
      <div className="flex gap-1 mt-2">
        <button
          className="font-semibold text-sbm-secondary hover:text-sbm-neutral text-[14px] leading-normal"
          type="button"
        >
          Click to upload
        </button>
        <P14 weight="font-medium">or drag and drop</P14>
      </div>
      <P14 className="text-neutral-30">Max size: {20}mb</P14>
      <input className={'focus-visible:none'} {...getInputProps()} />
    </div>
  )
}
