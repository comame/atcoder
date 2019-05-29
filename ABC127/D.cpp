#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector< std::pair<int, int> > cards;

    int n, m;
    std::cin >> n >> m;
    for (int i = 0; i < n; i++) {
        int tmp;
        std::cin >> tmp;
        cards.push_back(std::pair<int, int>(tmp, 1));
    }
    for (int i = 0; i < m; i++) {
        int b, c;
        std::cin >> b >> c;
        cards.push_back(std::pair<int, int>(c, b));
    }

    std::sort(cards.begin(), cards.end());
    std::reverse(cards.begin(), cards.end());

    long sum = 0;
    for (int i = 0; ; i++) {
        long number = cards[i].first;
        long quantity = cards[i].second;

        if (n <= quantity) {
            sum += n * number;
            break;
        } else {
            sum += quantity * number;
            n -= quantity;
        }
    }

    std::cout << sum << std::endl;
}