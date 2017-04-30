
# install mraa

echo "src mraa-upm http://iotdk.intel.com/repos/2.0/intelgalactic" > /etc/opkg/mraa-upm.conf
opkg update
opkg install mraa

