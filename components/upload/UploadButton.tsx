import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { ChangeEventHandler } from 'react'

interface UploadButtonProps {
	acceptedFileTypes?: string
	allowMultipleFiles?: boolean
	label: string
	onChange: (formData: FormData) => void
	uploadFileName: string
}

const UploadButton: React.FC<UploadButtonProps> = (props) => {
	const fileInputRef = React.useRef<HTMLInputElement | null>(null)
	const formRef = React.useRef<HTMLFormElement | null>(null)
	const onClickHandler = () => {
		fileInputRef.current?.click()
	}

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) {
			return
		}

		const formData = new FormData()

		Array.from(event.target.files).forEach((file) => {
			formData.append(event.target.name, file)
		})

		props.onChange(formData)

		formRef.current?.reset()
	}

	return (
		<form ref={formRef}>
			<button type="button" onClick={onClickHandler}>
				{props.label}
			</button>
			<input
				accept={props.acceptedFileTypes}
				multiple={props.allowMultipleFiles}
				name={props.uploadFileName}
				onChange={onChangeHandler}
				ref={fileInputRef}
				style={{ display: 'none' }}
				type="file"
			/>
		</form>
	)
}

export default UploadButton
