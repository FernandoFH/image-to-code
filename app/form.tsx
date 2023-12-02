'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Form = ({ transformURLToCode }: { transformURLToCode: (url: string) => void }) => {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(evt) => {
				evt.preventDefault()

				const form = evt.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement

				console.log(url.value)
				transformURLToCode(url.value)
			}}
		>
			<Label htmlFor="url">Introduce tu URL de tu imagen: </Label>
			<Input name="url" id="url" type="url" placeholder="http://tu-screenshop.com" />
			<Button> Genera codigo </Button>
		</form>
	)
}
