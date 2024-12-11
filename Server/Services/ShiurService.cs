using Entities;
using Repositories;
using Services;
using DTOs;
using AutoMapper;

namespace Services
{
    public class ShiurService : IShiurService
    {
        private readonly IShiurRepository _shiurRepository;
        private readonly IMapper _mapper;
        public ShiurService(IShiurRepository shiurRepository, IMapper mapper)
        {
            _shiurRepository = shiurRepository;
            _mapper=mapper;
        }

        public Task<IEnumerable<ShiurDTO>> GetAllAsync()
        {
            var shiurim = await _shiurRepository.GetAllAsync();
            if (shiurim == null) return null;

            return _mapper.Map<IEnumerable<ShiurDTO>>(shiurim);
        }

        public Task<ShiurDTO> GetByIdAsync(int id)
        {
            return _shiurRepository.GetByIdAsync(id);
        }

        public Task<IEnumerable<ShiurDTO>> GetByLengthAsync(int minLength, int maxLength)
        {
            return _shiurRepository.GetByLengthAsync(minLength, maxLength);
        }

        public Task<IEnumerable<ShiurDTO>> GetByYearAsync(int year)
        {
            return _shiurRepository.GetByYearAsync(year);
        }

        public Task<IEnumerable<ShiurDTO>> GetByRavIdAsync(int ravId)
        {
            return _shiurRepository.GetByRavIdAsync(ravId);
        }

        public Task AddAsync(ShiurDTO shiur)
        {
            return _shiurRepository.AddAsync(shiur);
        }

        public Task UpdateAsync(ShiurDTO shiur)
        {
            return _shiurRepository.UpdateAsync(shiur);
        }
        public async Task DeleteAsync(int id)
        {
            var shiur = await _shiurRepository.GetByIdAsync(id);
            if (shiur != null)
            {
                await _shiurRepository.DeleteAsync(shiur);
            }
            else
            {
                throw new ArgumentException($"Shiur with id {id} not found");
            }
        }
    }
}
