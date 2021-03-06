const { getUserName } = require('./exercicio2');

describe('testes para funcao getUserName', () => {
	it('testa se a funcao retorna um id que existe', () => {
		expect.assertions(1);
		return getUserName(4).then(user => expect(user).toEqual('Mark'));
	});

	it('testa quando o id nao existe', () => {
		expect.assertions(1);
		return getUserName(2).catch(error => expect(error).toEqual({ error: 'User with 2 not found.'}));
	});
});

describe('testes para funcao getUserName ASYNC/AWAIT', () => {
	it('testa se a funcao retorna um id que existe ASYNC/AWAIT', async() => {
		expect.assertions(1);
		return await getUserName(4).then(user => expect(user).toEqual('Mark'));
	});

	it('testa quando o id nao existe ASYNC/AWAIT', async () => {
		expect.assertions(1);
		try {
			await getUserName(2)
		} catch (error) {
			expect(error).toEqual({ error: 'User with 2 not found.'})
		}
	});
});
