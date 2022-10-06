export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop,
) {
	plop.setGenerator('page', {
		description: 'this is a skeleton plopfile',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name your resource: ',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{titleCase name}}.tsx',
				templateFile: 'templates/page.template.hbs',
			},
		],
	}),
		plop.setGenerator('time', {
			description: 'this is a skeleton plopfile',
			prompts: [
				{
					type: 'input',
					name: 'name',
					message: 'Name your resource: ',
				},
			],
			actions: [
				{
					type: 'add',
					path: 'src/Out/{{titleCase name}}.tsx',
					templateFile: 'templates/time.template.hbs',
				},
			],
		}),
		plop.setGenerator('component', {
			description: 'this is a skeleton plopfile',
			prompts: [
				{
					type: 'input',
					name: 'name',
					message: 'Name your resource: ',
				},
			],
			actions: [
				{
					type: 'add',
					path: 'src/Components/{{titleCase name}}.tsx',
					templateFile: 'templates/page.template.hbs',
				},
			],
		})

	plop.setHelper('titleCase', (str) => {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		})
	})
}
