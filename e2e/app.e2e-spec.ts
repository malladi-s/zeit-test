import { Angular2RedditPage } from './app.po';

describe('angular2-reddit App', function() {
  let page: Angular2RedditPage;

  beforeEach(() => {
    page = new Angular2RedditPage();
  });

  it('should have the header', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Angular Simple Reddit');
  });

  it('should allow voting', () => {
    page.navigateTo();
    expect(page.getVoteScore(0)).toEqual('3');
    page.upvote(0);
    page.upvote(0);
    expect(page.getVoteScore(0)).toEqual('5');
  });
});
