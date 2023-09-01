import snscrape.modules.twitter as sntwitter
import pandas as pd

query = "chad booc (cpp OR npa OR terorista) until:2020-12-31 since:2016-01-01"
tweets = []
count = 0

for tweet in sntwitter.TwitterSearchScraper(query).get_items():
    count += 1

    tweets.append([
        '', '', '', '',                                                                                 # Metadata
        tweet.user.username, tweet.user.displayname, tweet.user.rawDescription, '',                     # Account Details
        tweet.user.created, tweet.user.friendsCount, tweet.user.followersCount, tweet.user.location,
        '', tweet.rawContent, '', '', tweet.date, tweet.url, '', '',                                    # Tweet Details
        tweet.likeCount, tweet.replyCount, tweet.retweetCount, tweet.quoteCount, tweet.viewCount,       # Tweet Statistics
    ])

print(count)

df = pd.DataFrame(tweets, columns=[
    'Timestamp', 'Collector', 'Topic', 'Keywords',
    'Account handle', 'Account name', 'Account bio', 'Account type', 'Joined', 'Following', 'Followers', 'Location',
    '', 'Raw data', 'Translated data', 'Data type', 'Date posted', 'Tweet URL', 'Screenshot', 'Content type',
    'Favorites', 'Replies', 'Retweets', 'Quote Tweets', 'Views'
])

df.to_csv('tweets10.csv')