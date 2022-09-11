export default function (plop) {
	// create your generators here
	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [], // array of inquirer prompts
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/Component.tsx.hbs',
			},
		], // array of actions
	})
}
