# Initial Dev Environment Set Up
1. Install yarn globally
	* `npm i -g yarn`
2. Install postgres
	* Mac: using homebrew: `brew install postgresql`
	* Windows: [PostgreSQL: Windows installers](https://www.postgresql.org/download/windows/)
3. Run the command : 
	*  `ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`
4. Install knex globally
	* `npm i -g knex`
5. Install nodemon globally
	* `npm i -g nodemon`
6. Start postgres
	1. `brew services start postgresql`
7. Continue with instructions in the README.md