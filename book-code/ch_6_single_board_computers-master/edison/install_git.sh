
# check latest image
configure_edison --version

# wifi connection needed
configure_edison --wifi

# install git

# add to /etc/opkg/base-feeds.conf
echo -n "src all     http://iotdk.intel.com/repos/1.1/iotdk/all" > /etc/opkg/base-feeds.conf
echo -n "src x86 http://iotdk.intel.com/repos/1.1/iotdk/x86" > /etc/opkg/base-feeds.conf
echo -n "src i586    http://iotdk.intel.com/repos/1.1/iotdk/i586" > /etc/opkg/base-feeds.conf

# update feeds
opkg update

opkg install git



