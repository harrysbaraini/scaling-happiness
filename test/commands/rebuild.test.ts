import {expect, test} from '@oclif/test'

describe('rebuild', () => {
  test
  .stdout()
  .command(['rebuild'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['rebuild', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
