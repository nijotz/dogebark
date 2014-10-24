var inputs = {
  'url': 'URL',
};
var oneliner = 'curl %(dogebark_url)s > /tmp/dogebark.sh; wget %(url)s; bash /tmp/dogebark.sh';
dogebark_add('File Download', 'Get notified when your file is finished downloading', inputs, oneliner);
