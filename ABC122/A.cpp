// https://atcoder.jp/contests/abc122/tasks/abc122_a

#include <iostream>

int main() {
    char b;
    std::cin >> b;

    switch (b) {
        case 'A':
            std::cout << 'T' << std::endl;
            break;
        case 'T':
            std::cout << 'A' << std::endl;
            break;
        case 'G':
            std::cout << 'C' << std::endl;
            break;
        case 'C':
            std::cout << 'G' << std::endl;
            break;
    }
}