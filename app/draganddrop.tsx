'use client'

import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

export const DragAndDrop = ({ transformImageToCode }: { transformImageToCode: (file: File) => Promise<void> }) => {
	const updateFiles = (files: ExtFile[]) => {
		const file = files[0].file
		if (file != null) transformImageToCode(file)
	}

	return (
		<Dropzone
			header={false}
			footer={false}
			maxFiles={1}
			label="Arrastra aqui tu imagen"
			accept="image/*"
			onChange={updateFiles}
		/>
	)
}
