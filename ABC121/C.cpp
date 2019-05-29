#include <iostream>
#include <vector>
#include <utility>
#include <algorithm>

int main() {
    int n, m;
    std::cin >> n >> m;
    std::vector< std::pair<int, int> > shops;

    for (int i = 0; i < n; i++) {
        int a, b;
        std::cin >> a >> b;
        shops.push_back(std::pair<int, int>(a, b));
    }

    std::sort(shops.begin(), shops.end());

    long long money = 0;
    for (int i = 0; i < shops.size(); i++) {
        long long cost = shops[i].first;
        long long count = shops[i].second;


        if (count < m) {
            money = money + cost * count;
            m = m - count;
        } else {
            money = money + cost * m;
            break;
        }
    }

    std::cout << std::endl << money << std::endl;
}