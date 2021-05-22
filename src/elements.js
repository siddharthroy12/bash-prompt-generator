/* eslint-disable */
let elements =  {
	tabs: {
		'basic': {
			tabTitle: 'Basic Elements',
			elements: [
				{
					name: 'Username',
					hint: 'Current Username.',
					code: '\\u',
					addon: '',
					preview: 'user',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Hostname',
					hint: 'Current Username.',
					code: '\\h',
					addon: '',
					preview: 'host',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'FQDN',
					hint: 'Fully Qualified Domain Name of host.',
					code: '\\H',
					addon: '',
					preview: 'host.domain.com',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Shell',
					hint: 'The shell begin executed.',
					code: '\\s',
					addon: '',
					preview: 'bash',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Shell Version',
					hint: 'Version of shell',
					code: '\\v',
					addon: '',
					preview: '4.2',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Shell Release',
					hint: 'The patch level of shell.',
					code: '\\V',
					addon: '',
					preview: '4.2.4',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Path to current directory',
					hint: 'Path to the current directory with $HOME abbreviated to ~.',
					code: '\\w',
					addon: '',
					preview: '~/dir',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Current working directory',
					hint: 'Current working directory with $HOME abbreviated to ~.',
					code: '\\W',
					addon: '',
					preview: 'dir',
					fg: 'white',
					bg: 'black'
				},
				{
					name: '$',
					hint: 'Normally $. Changes to # when logged as root.',
					code: '\\\\$',
					addon: '',
					preview: '$',
					fg: 'white',
					bg: 'black'
				}
			]
		},

		'status' : {
			tabTitle: 'Status Elements',
			elements: [
				{
					name: 'Error Code',
					hint: 'Return code of the previous command.',
					code: '\\`nonzero_return\\\`',
					addon: 'function nonzero_return() {\n\tRETVAL=$?\n\t[ $RETVAL -ne 0 ] && echo \"$RETVAL\"\n}',
					preview: '1',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Git Status',
					hint: 'If in a git repository, the current branch and status indicators. Otherwise blank.',
					code: '\\`parse_git_branch\\`',
					addon: '# get current branch in git repo\nfunction parse_git_branch() {\n\tBRANCH=`git branch 2> \/dev\/null | sed -e \'\/^[^*]\/d\' -e \'s\/* \\(.*\\)\/\\1\/\'`\n\tif [ ! \"${BRANCH}\" == \"\" ]\n\tthen\n\t\tSTAT=`parse_git_dirty`\n\t\techo \"[${BRANCH}${STAT}]\"\n\telse\n\t\techo \"\"\n\tfi\n}\n\n# get current status of git repo\nfunction parse_git_dirty {\n\tstatus=`git status 2>&1 | tee`\n\tdirty=`echo -n \"${status}\" 2> \/dev\/null | grep \"modified:\" &> \/dev\/null; echo \"$?\"`\n\tuntracked=`echo -n \"${status}\" 2> \/dev\/null | grep \"Untracked files\" &> \/dev\/null; echo \"$?\"`\n\tahead=`echo -n \"${status}\" 2> \/dev\/null | grep \"Your branch is ahead of\" &> \/dev\/null; echo \"$?\"`\n\tnewfile=`echo -n \"${status}\" 2> \/dev\/null | grep \"new file:\" &> \/dev\/null; echo \"$?\"`\n\trenamed=`echo -n \"${status}\" 2> \/dev\/null | grep \"renamed:\" &> \/dev\/null; echo \"$?\"`\n\tdeleted=`echo -n \"${status}\" 2> \/dev\/null | grep \"deleted:\" &> \/dev\/null; echo \"$?\"`\n\tbits=\'\'\n\tif [ \"${renamed}\" == \"0\" ]; then\n\t\tbits=\">${bits}\"\n\tfi\n\tif [ \"${ahead}\" == \"0\" ]; then\n\t\tbits=\"*${bits}\"\n\tfi\n\tif [ \"${newfile}\" == \"0\" ]; then\n\t\tbits=\"+${bits}\"\n\tfi\n\tif [ \"${untracked}\" == \"0\" ]; then\n\t\tbits=\"?${bits}\"\n\tfi\n\tif [ \"${deleted}\" == \"0\" ]; then\n\t\tbits=\"x${bits}\"\n\tfi\n\tif [ \"${dirty}\" == \"0\" ]; then\n\t\tbits=\"!${bits}\"\n\tfi\n\tif [ ! \"${bits}\" == \"\" ]; then\n\t\techo \" ${bits}\"\n\telse\n\t\techo \"\"\n\tfi\n}\n',
					preview: '[main]',
					fg: 'white',
					bg: 'black'
				},
			]
		},

		'dateandtime' : {
			tabTitle: 'Date & Time Elements',
			elements: [
				{
					name: 'Username',
					hint: 'Current Username',
					code: '\\u',
					addon: '',
					preview: 'Thu May 20',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Hostname',
					hint: 'Current Username',
					fg: 'white',
					bg: 'black'
				},
				{
					name: 'Username',
					hint: 'Current Username',
					fg: 'white',
					bg: 'black'
				}
			]
		},

		'extra' : {
			tabTitle: 'Extra Elements',
			elements: [
				{
					name: 'Username',
					hint: 'Current Username',
					code: '\\u'
				},
				{
					name: 'Hostname',
					hint: 'Current Username',
					code: '\\u'
				},
				{
					name: 'Username',
					hint: 'Current Username',
					code: '\\u'
				}
			]
		}
	}
}

let colors = {
	'none': {
		shade: '',
		code: ''
	},
	'red': {
		shade: '#FF5555',
		code: 1
	},
	'green': {
		shade: '#50FA7B',
		code: 2
	},
	'blue': {
		shade: '#BD93F9',
		code: 4
	},
	'yellow': {
		shade: '#F1FA8C',
		code: 3
	},
	'cyan': {
		shade: '#8BE9FD',
		code: 6
	},
	'pink': {
		shade: '#FF79C6',
		code: 5
	},
	'black': {
		shade: '#121212',
		code: 0
	},
	'white': {
		shade: '#D9FBFF',
		code: 7
	}
}

export {
	elements,
	colors
}