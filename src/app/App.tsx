import { Button } from '@/shared/ui/button'

function App() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="text-center space-y-4">
				<h1 className="text-4xl font-bold text-foreground">
					example-project
				</h1>
				<p className="text-muted-foreground">
					Template React + shadcn/ui configurado
				</p>
				<div className="flex gap-4 justify-center">
					<Button>Botão</Button>
					<Button variant="outline">Outline</Button>
				</div>
			</div>
		</div>
	)
}

export default App