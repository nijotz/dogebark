var inputs = {
  'dns': 'DNS',
  'ip': 'IP'
};
var oneliner = "curl %(dogebark_url)s > /tmp/dogebark.sh; while ! nslookup %(dns)s | grep %(ip)s; do sleep 5; echo 'nope.'; done; while true; do bash /tmp/dogebark.sh; done";
dogebark_add('DNS Propagation', 'Alerts you when that DNS change you made finally propogates', inputs, oneliner);
