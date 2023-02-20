import * as router from 'next/router'

export const useRouterMock = (othersMock = {}) => {
  const pushMock = jest.fn()
  const replaceMock = jest.fn()
  const reloadMock = jest.fn()
  const backMock = jest.fn()
  const prefetchMock = jest.fn()
  const beforePopStateMock = jest.fn()
  const eventsMock = {
    emit: jest.fn(),
    off: jest.fn(),
    on: jest.fn(),
  }

  jest.spyOn(router, 'useRouter').mockImplementation((): any => ({
    route: '',
    pathname: '',
    query: {},
    isFallback: false,
    asPath: '/',
    events: eventsMock,
    push: pushMock,
    replace: replaceMock,
    reload: reloadMock,
    back: backMock,
    prefetch: prefetchMock,
    beforePopState: beforePopStateMock,
    ...othersMock,
  }))

  return {
    pushMock,
    replaceMock,
    reloadMock,
    backMock,
    prefetchMock,
    beforePopStateMock,
    eventsMock,
  }
}
